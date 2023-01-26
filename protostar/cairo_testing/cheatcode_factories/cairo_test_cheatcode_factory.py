from typing import List

from protostar.cheatable_starknet.cheatables.cheatable_starknet_facade import (
    CheatableStarknetFacade,
)
from protostar.cheatable_starknet.cheatcodes.load_cairo_cheatcode import (
    LoadCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.prank_cairo_cheatcode import (
    PrankCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.store_cairo_cheatcode import (
    StoreCairoCheatcode,
)
from protostar.cheatable_starknet.cheaters.block_info import BlockInfoCairoCheater
from protostar.cheatable_starknet.cheaters.contracts import ContractsCairoCheater
from protostar.cheatable_starknet.cheaters import CairoCheaters
from protostar.cheatable_starknet.cheatcodes.cairo_cheatcode import CairoCheatcode
from protostar.cheatable_starknet.cheatcodes.declare_cairo_cheatcode import (
    DeclareCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.deploy_cairo_cheatcode import (
    DeployCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.deploy_contract_cairo_cheatcode import (
    DeployContractCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.invoke_cairo_cheatcode import (
    InvokeCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.prepare_cairo_cheatcode import (
    PrepareCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.roll_cairo_cheatcode import (
    RollCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.warp_cairo_cheatcode import (
    WarpCairoCheatcode,
)
from protostar.cheatable_starknet.cheatcodes.call_cairo_cheatcode import (
    CallCairoCheatcode,
)
from protostar.compiler import ProjectCompiler
from protostar.cheatable_starknet.cheaters.storage import StorageCairoCheater


class CairoTestCheatcodeFactory:
    def __init__(
        self,
        cheatable_starknet_facade: CheatableStarknetFacade,
        project_compiler: ProjectCompiler,
    ):
        self._cheatable_starknet_facade = cheatable_starknet_facade
        self.project_compiler = project_compiler

    def build_cheatcodes(self) -> List[CairoCheatcode]:
        cheaters = CairoCheaters(
            block_info=BlockInfoCairoCheater(
                cheatable_state=self._cheatable_starknet_facade.cheatable_state
            ),
            contracts=ContractsCairoCheater(
                cheatable_starknet_facade=self._cheatable_starknet_facade
            ),
            storage=StorageCairoCheater(
                cheatable_state=self._cheatable_starknet_facade.cheatable_state
            ),
        )
        declare_cheatcode = DeclareCairoCheatcode(
            cheaters=cheaters,
            project_compiler=self.project_compiler,
        )
        prepare_cheatcode = PrepareCairoCheatcode(
            cheaters=cheaters,
        )
        deploy_cheatcode = DeployCairoCheatcode(
            cheaters=cheaters,
        )

        return [
            WarpCairoCheatcode(cheaters=cheaters),
            RollCairoCheatcode(cheaters=cheaters),
            deploy_cheatcode,
            declare_cheatcode,
            prepare_cheatcode,
            DeployContractCairoCheatcode(
                cheaters=cheaters,
                declare_cheatcode=declare_cheatcode,
                prepare_cheatcode=prepare_cheatcode,
                deploy_cheatcode=deploy_cheatcode,
            ),
            CallCairoCheatcode(cheaters=cheaters),
            InvokeCairoCheatcode(
                cheaters=cheaters,
            ),
            PrankCairoCheatcode(
                cheaters=cheaters,
            ),
            StoreCairoCheatcode(
                cheaters=cheaters,
            ),
            LoadCairoCheatcode(
                cheaters=cheaters,
            ),
        ]
