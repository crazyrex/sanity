/* eslint-disable id-length */

import config from 'config:sanity'
import schema from 'part:@sanity/base/schema?'
import React from 'react'
import Root from '../components/Root'
import DataProvider from '../providers/Data'

const BUILTIN_TYPES = [
  'any',
  'string',
  'text',
  'datetime',
  'date',
  'boolean',
  'url',
  'email',
  'number',
  'reference',
  'image',
  'file',
  'object',
  'document',
  'array'
]

function getUserTypes() {
  const allTypes = schema.getTypeNames()
  return allTypes
    .filter(t => !t.startsWith('sanity.'))
    .filter(t => BUILTIN_TYPES.indexOf(t) === -1)
    .map(t => schema.get(t))
    .filter(t => t.type && t.type.name === 'document')
}

class RootContainer extends React.PureComponent {
  state = {
    projectInvitationEmail: '',
    isSendingInvitation: false,
    roles: [
      {title: 'Administrator', name: 'admin'},
      {title: 'Read and write', name: 'rw'},
      {title: 'Read', name: 'r'}
    ],
    roleIdx: 0
  }

  handleProjectInvitationEmailChange = projectInvitationEmail => {
    this.setState({projectInvitationEmail})
  }

  handleProjectInvitationRoleChange = roleIdx => {
    this.setState({roleIdx})
  }

  handleSendProjectInvitation = () => {
    const role = this.state.roles[this.state.roleIdx]

    if (!role) {
      throw new Error('Could not resolve role')
    }

    const body = {
      email: this.state.projectInvitationEmail,
      role: role.name
    }

    console.log(`POST https://manage.sanity.io/invitations/project/${config.api.projectId}`, body)

    this.setState({isSendingInvitation: true})

    setTimeout(() => this.setState({isSendingInvitation: false}), 1000)
  }

  render() {
    const {projectId, dataset} = config.api

    const childProps = {
      dataset,
      groqEndpoint: `https://${projectId}.api.sanity.io/v1/data/query/${dataset}`,
      graphqlEndpoint: `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`,
      manageUrl: `https://manage.sanity.io/projects/${projectId}`,
      projectId,
      types: getUserTypes()
    }

    return (
      <DataProvider query={`* [ _type == $type ] { title }`} params={{type: 'post'}}>
        {({data, error}) => (
          <Root
            data={data}
            error={error}
            {...childProps}
            {...this.state}
            onProjectInvitationEmailChange={this.handleProjectInvitationEmailChange}
            onProjectInvitationRoleChange={this.handleProjectInvitationRoleChange}
            onSendProjectInvitation={this.handleSendProjectInvitation}
          />
        )}
      </DataProvider>
    )
  }
}

export default RootContainer
