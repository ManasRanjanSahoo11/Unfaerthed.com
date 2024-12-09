import { Component } from "react";

class Chatbot extends Component {
    constructor(props) {
    super(props)
    }

    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = {"appId":"34273e882597a2c073b45e03715a871be","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    }

    render() {
        return <div></div>
    }
}

export default Chatbot