/**
 * Internal dependencies.
 */
import Select from '@/components/select/select';
import Sidebar from '@/components/sidebar/sidebar';
import Header, { HeaderLeft, HeaderRight } from '@/components/header/header';

const Layout = ({ children }) => (
    <div className="layout">
        <Sidebar />

        <div className="layout__inner">
            <Header>
                <HeaderLeft>
                    <Select />
                </HeaderLeft>
                <HeaderRight>
                    <div className="account-menu">
                        <img src="images/avatar.png" height="56" width="56" />
                    </div>
                </HeaderRight>
            </Header>

            <div className="layout__content">{children}</div>
        </div>
    </div>
);

export default Layout;
