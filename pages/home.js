import React, { Component } from "react";
import factory from '../ethereum/factory';
import {Card} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import Layout from '../components/Layout';
import {Link} from '../routes';
import EventVoting from '../ethereum/events';
class EventIndex extends Component {
    state = {
        event_num: 1
    };
    static async getInitialProps(props){
        const events = await factory.methods.getDeployedEvents().call();
        return{
            events
        };
    }

    renderEvents () {
        const items = this.props.events.map((address,index) =>{
            const header = `Event ${this.state.event_num + index}`;
            return{
                header,
                description : (
                <Link route = {`/events/${address}`}>
                    <a>View this Event</a>
                </Link>),
                fluid : true,
            };
        });
        return (
            <div>
                <div className=" animate-pulse delay-150 border-solid border-white rounded-md shadow-xl font-semibold text-center p-10 ">
                    <Card.Group items={items} />
                </div>
            </div>

);
    } 
    render() {
        return (
            <Layout><script src="https://cdn.tailwindcss.com"></script>
                <div className="h-full bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600">
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
                    </link>
                    <div className="flex justify-center pt-7">
                        <img className="w-1/2 border-solid border-slate-950 rounded-lg pl-12 pr-12 bg-contain bg-center" src="https://www.miamidade.gov/resources/images/news/2020-06-22-three-ways-to-vote.jpg" alt="voting"></img>
                    </div>
    
                    <h2 className="rounded-lg py-7 text-3xl font-bold underline text-cliffordh-24 h-24 
                bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 to-gray-500 text-white text-center bg-opacity-70">
                        OnGoing Events !</h2>
                    {this.renderEvents()}
    
                    <Link route="/events/new">
                        <a>
    
                            <button type="button" className="flex justify-center mx-auto rounded-lg cursor-pointer animate-bounce delay-300 p-2 mt-5 text-white font-semibold px-6 py-3 h-12 w-48 
                        bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 hover:from-pink-500 hover:to-yellow-500">
                                Create an Event
                            </button>
                        </a>
                    </Link>
                </div>
    
            </Layout>
    )
    }
}

export default EventIndex;