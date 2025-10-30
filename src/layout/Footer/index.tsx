import { Container } from "@Components/Container";
import type React from "react";
import s from "./footer.module.scss";

function Footer(): React.JSX.Element {
	return (
		<div className={s.footer}>
			<Container>footer</Container>
		</div>
	);
}

export default Footer;
