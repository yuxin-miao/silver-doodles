import React, { Component } from 'react';
import {observer} from "mobx-react";

import{ CreateDetail } from './todoDetailCreate';
import { ShowDetail } from './todoShowDetail';



@observer
class TodoDetail extends Component<any, any> {

    render() {
        return (
            <>
                <CreateDetail />
                <ShowDetail />
            </>
        )
    }
}

export default TodoDetail;