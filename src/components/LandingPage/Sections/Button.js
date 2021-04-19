import React from 'react'
import { addToCart } from '../../../_Actions/UserActions';
import { useDispatch } from 'react-redux';
import { Button, Descriptions } from 'antd';

export default function AlarmListInfo(props) {

    const dispatch = useDispatch();

    const clickHandler = () => {
        //필요한 정보를 Cart 필드에다가 넣어 준다.
        dispatch(addToCart())
    }
 
    return (
        <div>
            {/* <Descriptions title="AlarmListInfo">
                <Descriptions.Item label="Productname">{props.detail.productName}</Descriptions.Item>
                <Descriptions.Item label="Date">{props.data.releaseString}</Descriptions.Item>
            </Descriptions> */}

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    저장
                </Button>
            </div>


        </div>
    )
}
