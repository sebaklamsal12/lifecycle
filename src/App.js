import React, { component } from "react";
class App extends Component {
    constructor()
    super()
    this.state = {
        count = 0;
    }
}
// this is where our mrthods will be defined 
increment = () => {

}
componentDidMount() {
    //put code here
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            return res.json();
        })
        .then(date => {
            console.log(data)
        })


}




render() {
        let { isLoaded, items } = this.state;
        if (!isloaded) {
            return <div > loading... < /div>;
            else {
                console.log('this isn item in a render method', items);
                return ( <
                    div >
                    <
                    div >
                    <
                    ul > {
                        items.map(el => {
                                return ( <
                                    li >
                                    Name; { el.name } | UserName: { el.username } |
                                    <
                                    a href = { 'https://@{el.webpage}' } > Webside < /a> <
                                    /li>
                                })
                        } < /ul> <
                        /div> <
                        /div>
                    )
                }
            }
        }