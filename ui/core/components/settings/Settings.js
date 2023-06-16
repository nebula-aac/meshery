import CloudIcon from '@mui/icons-material/Cloud';
import PollIcon from '@mui/icons-material/Poll';
import StorageIcon from '@mui/icons-material/Storage';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Fragment, useState } from 'react';
import MeshConfig from './MeshConfig';
import MeshAdapterConfig from './MeshAdapterConfig';
import Box from '@mui/material/Box';

function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const SettingsTabsPanel = () => {
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList variant='fullWidth' onChange={handleChange} aria-label='settings-tabs'>
                    <Tooltip title='Identify your cluster' placement='top' arrow>
                        <Tab icon={<CloudIcon />} value='1' label='Environment' {...allyProps(1)} />
                    </Tooltip>
                    <Tooltip title='Connect Meshery Adapters' placement='top' arrow>
                        <Tab value='2' label='Adapters' {...allyProps(2)} />
                    </Tooltip>
                    <Tooltip title='Configure Metrics backends' placement='top' arrow>
                        <Tab icon={<PollIcon />} value='3' label='Metrics' {...allyProps(3)} />
                    </Tooltip>
                    <Tooltip title='Reset System' placement='top' arrow>
                        <Tab icon={<StorageIcon />} value='4' label='Reset' {...allyProps(4)} />
                    </Tooltip>
                    <Tooltip title='MeshModel Summary' placement='top' arrow>
                        <Tab value='5' label='MeshModel Summary' {...allyProps(5)} />
                    </Tooltip>
                </TabList>
            </Box>
            <TabPanel value='1'>
                <MeshConfig />
            </TabPanel>
            <TabPanel value='2'>
                <MeshAdapterConfig />
            </TabPanel>
            <TabPanel value='3'>
                <Typography>
                    Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                    carrot cake gummi bears.
                </Typography>
            </TabPanel>
            <TabPanel value='4'>
                <Typography>
                    Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                    carrot cake gummi bears.
                </Typography>
            </TabPanel>
            <TabPanel value='5'>
                <Typography>
                    Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
                    carrot cake gummi bears.
                </Typography>
            </TabPanel>
        </TabContext>
    );
};

export default function MesherySettings() {
    return (
        <Fragment>
            <SettingsTabsPanel />
        </Fragment>
    )
}