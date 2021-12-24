import React from 'react'
import styled from 'styled-components'
import SidebarOption from './SidebarOption';
import { Create } from '@material-ui/icons';
import { InsertComment } from '@material-ui/icons';
import { Group } from '@material-ui/icons';
import {Inbox} from '@material-ui/icons';
import {Drafts} from '@material-ui/icons';
import {BookmarkBorder} from '@material-ui/icons';
import {Apps} from '@material-ui/icons';
import {FileCopy} from '@material-ui/icons';
import {ExpandLess} from '@material-ui/icons';
import {ExpandMore} from '@material-ui/icons';
import {FiberManualRecord} from '@material-ui/icons';
import {Add} from '@material-ui/icons';
import { auth, db } from '../firebase';
import {useCollection} from "react-firebase-hooks/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
function Sidebar() {

    const [channels] =useCollection(db.collection('rooms'));
    const [user] = useAuthState(auth);
    return (
        <SidebarContainer>
             <SidebarHeader>
                    <SidebarInfo>
                            <h2>Seyran's HQ</h2>
                            <h3 >
                                <FiberManualRecord />
                                {user?.displayName}
                            </h3>
                    </SidebarInfo>
                    <Create />
             </SidebarHeader>

             <SidebarOption Icons={InsertComment} title="Threads" />
             <SidebarOption Icons={Inbox} title="Mentions & Reactions" />
             <SidebarOption Icons={Drafts} title="Saved Items" />
             <SidebarOption Icons={BookmarkBorder} title="Channel browser" />
             <SidebarOption Icons={Group} title="People & User Groups" />
             <SidebarOption Icons={Apps} title="Apps" />
             <SidebarOption Icons={FileCopy} title="File browser" />
             <SidebarOption Icons={ExpandLess} title="Show Less" />
             <hr />
             <SidebarOption Icons={ExpandMore} title="Channels" />
             <hr />
             <SidebarOption Icons={Add} addChannelOption title="Add Channel" />

             {channels?.docs.map(doc =>(
                  <SidebarOption key = {doc.id} 
                  id = {doc.id} 
                   
                  title={doc.data().name}
                   />
             ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

        >hr
            {
                margin-top: 10px;
                margin-bottom: 10px;
                border: 1px solid #49274b;
            }


`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;

    > .MuiSvgIcon-root{
       padding: 8px;
       color: #49274b;
       font-size: 18px;
       background-color: white;
       border-radius: 999px;

    }


`;

const SidebarInfo = styled.div`
    flex: 1;

    >h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    >h3
    {
        display: flex;
        font-size: 12px;
        font-weight: 400;
        align-items: center;

    }

    >h3 > .MuiSvgIcon-root
    {
         font-size: 14px;
            margin-top: 1px;
            margin-right: 2px;
            color: green;
    
    }
`;