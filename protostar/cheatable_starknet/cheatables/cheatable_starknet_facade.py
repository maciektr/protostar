from typing import cast

from typing_extensions import Self
from starkware.crypto.signature.fast_pedersen_hash import pedersen_hash_func
from starkware.starknet.business_logic.fact_state.patricia_state import (
    PatriciaStateReader,
)
from starkware.starknet.business_logic.fact_state.state import SharedState
from starkware.starknet.business_logic.state.state_api_objects import BlockInfo
from starkware.starknet.definitions.general_config import StarknetGeneralConfig
from starkware.starknet.testing.starknet import Starknet
from starkware.starknet.testing.state import StarknetState
from starkware.storage.dict_storage import DictStorage
from starkware.storage.storage import FactFetchingContext

from protostar.cheatable_starknet.cheatables import CheatableCachedState


class CheatableStarknetFacade:
    @classmethod
    async def create(cls):
        general_config = StarknetGeneralConfig()
        ffc = FactFetchingContext(storage=DictStorage(), hash_func=pedersen_hash_func)
        empty_shared_state = await SharedState.empty(
            ffc=ffc, general_config=general_config
        )
        state_reader = PatriciaStateReader(
            global_state_root=empty_shared_state.contract_states,
            ffc=ffc,
            contract_class_storage=ffc.storage,
        )
        cheatable_state = CheatableCachedState(
            block_info=BlockInfo.empty(
                sequencer_address=general_config.sequencer_address
            ),
            state_reader=state_reader,
            contract_class_cache={},
        )
        starknet_state = StarknetState(
            general_config=general_config, state=cheatable_state
        )
        return cls(starknet=Starknet(state=starknet_state))

    def __init__(self, starknet: Starknet) -> None:
        self._starknet = starknet

    @property
    def cached_state(self) -> CheatableCachedState:
        return cast(CheatableCachedState, self._starknet.state.state)

    def fork(self) -> Self:
        return CheatableStarknetFacade(starknet=self._starknet.copy())
