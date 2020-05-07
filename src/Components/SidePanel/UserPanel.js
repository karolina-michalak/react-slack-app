import React from "react";
import { Grid, Header, Icon, Dropdown } from "semantic-ui-react";

class UserPanel extends React.Component {
    dropdownOptions = () => [
        {
            key: 'user',
            text: <span>Signed in as <strong>user</strong></span>,
            disabled: true
        },
        {
            key: 'avatar',
            text: <span>Change Avatar</span>
        },
        {
            key: 'signout',
            text: <span>Sign Out</span>
        }
    ]
  render() {
    return (
      <Grid style={{ background: "violet" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            <Header inverted fload="left" as="h2">
              <Icon name="heart" />
              <Header.Content>Dev Chat</Header.Content>
            </Header>
          </Grid.Row>
          <Header style={{padding: '0.2em'}} as="h4" inverted>
        <Dropdown trigger={<span>User</span>} options={this.dropdownOptions()}/>
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
