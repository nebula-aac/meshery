package organizations

import (
	"errors"
	"fmt"

	"github.com/meshery/meshery/mesheryctl/internal/cli/pkg/api"
	"github.com/meshery/meshery/mesheryctl/pkg/utils"
	"github.com/meshery/meshery/server/models"
	"github.com/spf13/cobra"
)

var (
	availableSubcommands = []*cobra.Command{listOrgCmd}
	organizationsApiPath = "api/identity/orgs"
	count                bool
)

var OrgCmd = &cobra.Command{

	Use:   "organization",
	Short: "Interact with registered orgnizations",
	Long: `Interact with registered organizations to display detailled informations
Documentation for organizations can be found at https://docs.meshery.io/reference/mesheryctl/exp/organizations`,
	Example: `
// Number of  registered orgs
mesheryctl exp organization --count

// List registerd orgs
mesheryctl exp organization list
	`,
	Args: func(cmd *cobra.Command, args []string) error {
		count, _ = cmd.Flags().GetBool("count")
		if len(args) == 0 && !count {
			if err := cmd.Usage(); err != nil {
				return err
			}
			return utils.ErrInvalidArgument(errors.New("please provide a subcommand with the command"))
		}
		return nil
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		if count {
			orgs, err := api.Fetch[models.OrganizationsPage](fmt.Sprintf("%s?all=true", organizationsApiPath))
			if err != nil {
				return err
			}
			utils.DisplayCount("organizations", int64(orgs.TotalCount))
			return nil
		}

		if ok := utils.IsValidSubcommand(availableSubcommands, args[0]); !ok {
			return utils.ErrInvalidArgument(fmt.Errorf("'%s' is an invalid command. Use 'mesheryctl organization --help' to display usage guide", args[0]))
		}

		return nil
	},
}

func init() {
	OrgCmd.Flags().BoolP("count", "", false, "total number of registered organizations")
	OrgCmd.AddCommand(availableSubcommands...)

}
