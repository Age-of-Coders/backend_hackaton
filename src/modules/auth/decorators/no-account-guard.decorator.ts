import { SetMetadata } from "@nestjs/common";

export const NO_ACCOUNT_GUARD = 'no-account-guard';

export const NoAccountGuard = () => SetMetadata(NO_ACCOUNT_GUARD, true);