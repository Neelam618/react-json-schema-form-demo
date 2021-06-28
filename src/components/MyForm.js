import React from 'react'
// import { withTheme } from '@rjsf/core';
import { withTheme } from 'react-jsonschema-form';
import 'antd/dist/antd.css';

export default function MyForm(props) {
    // let framework = "";
    // if (props.frameworkName === "AntDTheme") {
    //     framework =AntDTheme;
    // }

    const Form = withTheme(props.framework);
    
    return (
        <div>
            <div style={{ margin: '4rem 6rem' }}>
                <Form schema={props.schema} uiSchema={props.uiSchema}
                 />
            </div>
        </div>
    )
}
