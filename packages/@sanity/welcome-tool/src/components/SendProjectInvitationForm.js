/* eslint-disable react/prop-types */

import React from 'react'
import DefaultButton from 'part:@sanity/components/buttons/default'
import FormField from 'part:@sanity/components/formfields/default'
import RadioButtonSelect from 'part:@sanity/components/selects/radio'
import DefaultTextField from 'part:@sanity/components/textfields/default'

import styles from './SendProjectInvitationForm.css'

function SendProjectInvitationForm(props) {
  function handleSubmit(evt) {
    evt.preventDefault()
    props.onSend()
  }

  function handleEmailChange(evt) {
    props.onEmailChange(evt.target.value)
  }

  function handleRoleChange(role) {
    props.onRoleChange(props.roles.indexOf(role))
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <DefaultTextField
        label="Email address"
        description="The invitation will be sent to this address."
        onChange={handleEmailChange}
        value={props.email}
        type="email"
        placeholder="Email address"
      />

      <FormField label="Role">
        <RadioButtonSelect
          items={props.roles}
          onChange={handleRoleChange}
          value={props.roles[props.roleIdx]}
        />
        <div className={styles.roleDescription}>
          NOTE: Administrators may manage all aspects of a project
        </div>
      </FormField>

      <div className={styles.buttons}>
        <DefaultButton type="submit" color="primary" disabled={props.email.length === 0}>
          Send invitation
        </DefaultButton>
      </div>
    </form>
  )
}

export default SendProjectInvitationForm
