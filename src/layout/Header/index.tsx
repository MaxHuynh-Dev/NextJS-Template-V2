import type React from "react";
import s from "./header.module.scss";

function Header(): React.ReactElement {
	return (
		<div className={s.header}>
			<h1>Header</h1>
		</div>
	);
}

export default Header;
