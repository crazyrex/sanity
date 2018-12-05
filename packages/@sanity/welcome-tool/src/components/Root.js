/* eslint-disable id-length */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import {IntentLink} from 'part:@sanity/base/router'
import AnchorButton from 'part:@sanity/components/buttons/anchor'
import React from 'react'
import SendProjectInvitationForm from './SendProjectInvitationForm'

import styles from './Root.css'

function lcfirst(str) {
  return str.substr(0, 1).toLowerCase() + str.slice(1)
}

function Root(props) {
  const {manageUrl, data, error, types} = props

  return (
    <div className={styles.root}>
      <pre style={{display: 'none'}}>{JSON.stringify({data, error})}</pre>

      <div className={styles.hero}>
        <h1>Welcome to your Sanity Studio</h1>

        <p>
          <strong>Well done!</strong> You’ve just started Sanity Studio and connected to a data
          project in Sanity’s cloud.
        </p>

        <div className={styles.content}>
          <div className={styles.youtubeVideo}>
            <iframe
              src="https://www.youtube.com/embed/2ceM_tSus_M"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className={styles.content}>
          <h2>About your Sanity project</h2>

          <dl className={styles.projectInfo}>
            <dt>Project ID</dt>
            <dd>{props.projectId}</dd>

            <dt>Dataset name</dt>
            <dd>{props.dataset}</dd>

            <dt>GROQ endpoint</dt>
            <dd>{props.groqEndpoint}</dd>

            <dt>GraphQL endpoint</dt>
            <dd>{props.graphqlEndpoint}</dd>
          </dl>
        </div>

        <p>
          <AnchorButton type="link" color="primary" href={manageUrl}>
            Manage your Sanity project
          </AnchorButton>
        </p>
      </div>

      <div className={styles.content}>
        <h2>Next up</h2>

        <details>
          <summary>
            <h3>Add some documents</h3>
          </summary>

          <div>
            <p>Here are the types in the current schema:</p>

            <ul>
              {types.map(t => (
                <li key={t.name}>
                  <IntentLink intent="create" params={{type: t.name}}>
                    Add {lcfirst(t.title || t.name || 'Untitled')} document
                  </IntentLink>
                </li>
              ))}
            </ul>
          </div>
        </details>

        <details>
          <summary>
            <h3>Invite your friends</h3>
          </summary>

          <div>
            <SendProjectInvitationForm
              onSend={props.onSendProjectInvitation}
              onEmailChange={props.onProjectInvitationEmailChange}
              onRoleChange={props.onProjectInvitationRoleChange}
              email={props.projectInvitationEmail}
              roles={props.roles}
              roleIdx={props.roleIdx}
            />
          </div>
        </details>

        <details>
          <summary>
            <h3>Remove the welcome screen (this screen)</h3>
          </summary>

          <div>
            <p>
              The Sanity Studio implements a concept called <em>parts</em> to make it easy to
              override and customize both its visual components and logic.{' '}
              <strong>Our goal is to make the most customizable CMS out there.</strong>
            </p>

            <p>
              This screen is part of <code>@sanity/welcome-tool</code>, which is one such{' '}
              <em>part</em>.
            </p>

            <p>
              To remove it, open <code>sanity.json</code> in the root of your studio project and
              remove <code>"@sanity/welcome-tool"</code> from the <code>plugins</code> array:
            </p>

            <pre>
              <code>
                {`  "plugins": [
...
`}
                <del>{`    "@sanity/welcome-tool",`}</del>
                {`
...
]`}
              </code>
            </pre>

            <p>
              You may now safely remove <code>"@sanity/welcome-tool"</code> from{' '}
              <code>dependencies</code> in the <code>package.json</code> file as well:
            </p>

            <pre>
              <code>
                {`  "dependencies": {
...
`}
                <del>{`    "@sanity/welcome-tool": "*",`}</del>
                {`
...
}`}
              </code>
            </pre>
          </div>
        </details>

        <h2>Learn from tutorials</h2>

        <ul>
          <li>
            <strong>Video</strong>: <a href="">Set up a blog using Sanity, Gatsby and Netlify</a>
          </li>
          <li>
            <strong>Video</strong>: <a href="">Set up Google Assistant with content from Sanity</a>
          </li>
          <li>
            <strong>Video</strong>:{' '}
            <a href="">Become a master at defining custom types in Sanity</a>
          </li>
          <li>
            <strong>Video</strong>: <a href="">Create your own input components in Sanity</a>
          </li>
        </ul>

        <p>
          Find more tutorials at <a href="">sanity.io/tutorials</a>.
        </p>

        <h2>Learn more from the docs</h2>

        <p>
          Head over to <a href="">sanity.io/docs</a> for in depth Sanity documentation. Here are
          some common sections:
        </p>

        <ul>
          <li>
            <a href="">Quering the API</a>
          </li>
          <li>
            <a href="">Creating custom types</a>
          </li>
          <li>
            <a href="">Customizing the Studio</a>
          </li>
        </ul>

        <h2>Get help in the community</h2>

        <p>
          We work hard to provide an including and helpful community. Get in touch with us and peers
          at our Slack:{' '}
          <strong>
            <a href="">sanity-io-land.slack.com</a>
          </strong>
        </p>

        <h2>Contact points</h2>

        <ul>
          <li>
            <a href="">Follow us on Twitter</a>
          </li>
          <li>
            <a href="">Subscribe to our newsletter</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Root
