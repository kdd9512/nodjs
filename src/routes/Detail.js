import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;
        if (location.state === undefined) {
            history.push("/"); // 넘어온 props정보가 없으면 메인으로 강제 리다이렉트(push)
        }
    }

    render() {
        const {location} = this.props;
     if (location.state) {
         return <span>{location.state.title}</span>
     } else {
         return null;
     }
    }
}

export default Detail;