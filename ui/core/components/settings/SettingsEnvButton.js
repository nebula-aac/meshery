import { Button, Typography } from "@mui/material";

export default function MesherySettingsEnvButton() {
    return (
        <Button
            type='submit'
            variant='contained'
            size='large'
            sx={{
                padding: '8px',
                borderRadius: 2,
                marginRight: '2rem',
            }}
            data-cy='btn-reset-database'
        >
            <Typography>Add Cluster</Typography>
        </Button>
    )
}