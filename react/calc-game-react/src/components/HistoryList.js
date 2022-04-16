import React from 'react'
import OneHistoryRecord from './OneRec'


export default function HistoryList({list}){
    return (
        <table>
            <thead>
                <tr>
                    <th>Первое<br/>число</th>
                    <th>Знак</th>
                    <th>Второе<br/>число</th>
                    <th>Ответ</th>
                    <th>Правильно<br/>или нет</th>
                </tr>
            </thead>
            <tbody>
                {list.map((record, index) => <OneHistoryRecord key={index} recordObject={record}/>)}
            </tbody>
            
        </table>
    )
}