import { createTheme } from '@mui/material/styles';
import { Typography, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = createTheme({});
export const defaultTextColor = grey[50];

export const StyledTypography = styled<typeof Typography>(Typography)(() => ({
	color: defaultTextColor,
}));

export const borderRadus = "5px";
export const fullScreenHeight = "100vh";
