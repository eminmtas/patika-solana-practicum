use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg, pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello World!");
    Ok(())
}

// Solscan: https://solscan.io/tx/4LtHd7ceMMyAufb32DDXVwmfg39zz4axsch9a6nRhsQbKcwyThHtiPxyXGA5KG9LMYKVmwwaPavzAW8AdU2rS5AR?cluster=devnet
// Solana Explorer: https://explorer.solana.com/tx/4LtHd7ceMMyAufb32DDXVwmfg39zz4axsch9a6nRhsQbKcwyThHtiPxyXGA5KG9LMYKVmwwaPavzAW8AdU2rS5AR?cluster=devnet