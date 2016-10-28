import * as React from 'react';

interface ProfileProps {
    name: string;
}

class Profile extends React.Component<ProfileProps, {}> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default Profile;