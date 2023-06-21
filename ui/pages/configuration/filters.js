import MesheryFilters from "@/core/components/sections/configuration/filters/MesheryFilters";
import { MesheryMetadataProvider } from "@/core/providers/MesheryMetadataProvider";

function Filters() {
    return (
        <MesheryMetadataProvider>
            <MesheryFilters />
        </MesheryMetadataProvider>
    )
}

export default Filters