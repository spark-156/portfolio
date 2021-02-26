import React from 'react';

import { Button, Space } from 'antd';

import './Admin.css';

export default function Admin() {
    console.log('hi im an admin!');
    return (<section id="admin" className="adminClass blackBorder">
        <Space direction="vertical" style={{width: "100%"}}>
            <Button block type='default'>New project</Button>
            <Button block type='default'>New about</Button>
            <Button block type='default'>new skills</Button>
            <Button block type='default'>new image</Button>
        </Space>
    </section>)
}