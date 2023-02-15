import "../../assets/scss/layout.scss"

interface IDefaultLayout {
	children: React.ReactNode
}

const DefaultLayout = ({ children }: IDefaultLayout) => (
	<div className="w-full flex justify-center items-center bg-indigo-700 text-zinc-300 layout--default">
		<div className="w-full md:w-1/2 layout__wrapper">
			&nbsp;
			<div className="layout__container p-4">
				{children}
			</div>
		</div>
	</div>
);

export default DefaultLayout;