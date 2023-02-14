import { Box, Card, CardContent, Paper, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '../../app/muiTheme';
import { indigo, blue } from '@mui/material/colors';
import { StyledTypography, borderRadus, fullScreenHeight, defaultTextColor } from '../../app/muiTheme';

export const ContainerBackgourdColor = indigo[900];
export const GuildlineBackgourdColor = blue[600];

const useStyles = makeStyles(() => ({
	// TODO: move root style to layout component => create layout component
	root: {
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'initial',
		},
		minHeight: fullScreenHeight,
	},

	container: {
		padding: theme.spacing(2),
		backgroundColor: ContainerBackgourdColor,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			borderRadius: borderRadus,
			width: '50%',
		},
	},

	startBtn: {
		color: defaultTextColor,
		marginBottom: theme.spacing(4),
	}
}));

const Homepage = () => {
	const classes = useStyles();

	return <div className={classes.root}>
		<Box className={classes.container}>
			<StyledTypography variant="h4" component="h1" textAlign="center" paddingTop={4}>Chatchit Card</StyledTypography>

			<Card>
				<CardContent style={{ backgroundColor: GuildlineBackgourdColor }}>
					<StyledTypography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StyledTypography>
				</CardContent>
			</Card>

			<Paper className={classes.startBtn}>
				<Button>Bắt đầu thôi</Button>
			</Paper>
		</Box>
	</div>

};

export default Homepage;