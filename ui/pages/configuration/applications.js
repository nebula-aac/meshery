import { MesheryMetadataProvider } from "@/core/providers/MesheryMetadataProvider"
import dynamic from "next/dynamic"

const MesheryApplications = dynamic(() => import('@/core/components/sections/configuration/applications/MesheryApplications'), {
    loading: () => <p>Loading...</p>
})

function Applications () {
    return (
        <MesheryMetadataProvider>
            <MesheryApplications />
        </MesheryMetadataProvider>
    )
}

export default Applications