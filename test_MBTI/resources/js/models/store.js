import { observable, action, computed, useStrict, decorate } from 'mobx';
import axios from 'axios';

class AppStore {
    // Values marked as 'observable' can be watched by 'observers'
    users = ["aaa"];
    
    // In strict mode, only actions can modify mobx state 
    setUsers = (users) => { this.users = [...users]; } 
    
}

const store = new AppStore();
decorate( AppStore,{
    users : observable,
    setUsers :action 
    });
export default store;
export { AppStore };