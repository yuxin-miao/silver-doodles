import { observable } from 'mobx';
import { UserIdentity } from '../../../common/types';
import { simpleFetch } from './fetch'; 

interface ViewId {
  name: string,
  document: string,
}

export class ViewStore {
  fetch = null;
  @observable currentUser: UserIdentity = {} as UserIdentity;
  @observable currentView: ViewId = {} as ViewId;

  constructor(fetch) {
    this.fetch = fetch;
  }

  
}