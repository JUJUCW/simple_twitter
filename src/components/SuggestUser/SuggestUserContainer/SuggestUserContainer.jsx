import { useState, useEffect } from 'react';
import { getTopTenUsers } from '../../../api/user.js'
import { useDataStatus } from '../../../context/DataContext.jsx';
import SuggestUserItem from '../SuggestUserItem/SuggestUserItem.jsx';

import styles from './SuggestUserContainer.module.scss';

export default function SuggestUserContainer() {
    const [users, setUsers] = useState([]);
    const { isDataUpdate } = useDataStatus();

    useEffect(() => {
    const getTopTenUser = async () => {
        try {
            const data = await getTopTenUsers();
            if (data.status === 'error') {
                console.log(data.message);
                return;
            }
            if (data) {
                // update data
                setUsers(data);
            }
        } catch (error) {
            console.log('獲取推文失敗', error);
        }
        }
        getTopTenUser();
    }, [isDataUpdate]);

    const topUserList = users.length > 0 ?users.map((user) => {
        return (
        <SuggestUserItem
            key={user.id}
            userId={user.id}
            avatar={user.avatar}
            name={user.name}
            account={user.account}
            isFollowed={user.isFollowed}
        />
        );
    }): null;

    return (
        <div className={styles.suggestFollowContainer}>
            <h4 className={styles.suggestUserTitle}>推薦跟隨</h4>
            <div className={styles.suggestUserCard}>
                {topUserList}
            </div>
        </div>
    );
}
