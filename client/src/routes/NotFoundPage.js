import React from 'react';

import { Result, Button } from 'antd';

export default function NotFoundPage() {
    return <Result 
        status="404"
        title="404"
        subTitle="Sorry this page does not exist on my portfolio website"
        extra={<a href="https://www.lucabergman.nl"><Button type="primary">Back home</Button></a>}
    />
}