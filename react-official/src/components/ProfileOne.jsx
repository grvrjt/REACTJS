import React from 'react';
import  Avatar  from './Avatar';


function Card({ children }) {
    return (
        <div  style={{
            width: 300,
            height: 300,
            border: '1px solid black',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {children}
        </div>
    )
}

export default function ProfileOne() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'gaurav',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    )
}
