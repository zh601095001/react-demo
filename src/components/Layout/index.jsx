import React from 'react';
import {Layout as LayoutAnt} from "antd";
import {Outlet} from "react-router-dom";
import styles from "./index.module.less"
const {Header, Content,Footer} = LayoutAnt

function Layout() {
	return (
		<LayoutAnt>
			<Header className={styles.header}>header</Header>
			<Content>
				<Outlet/>
			</Content>
			<Footer>footer</Footer>
		</LayoutAnt>
	);
}

export default Layout;