/**
 * Internal dependencies.
 */
import Select from '@/components/select/select';
import Sidebar from '@/components/sidebar/sidebar';
import AccountMenu from '@/blocks/account/account-menu';
import Header, { HeaderLeft, HeaderRight } from '@/components/header/header';

const Layout = ({ guest, children }) =>
    guest ? (
        <div className="layout layout--guest">{children}</div>
    ) : (
        <div className="layout">
            <Sidebar />

            <div className="layout__inner">
                <Header>
                    <HeaderLeft>
                        <Select />
                    </HeaderLeft>
                    <HeaderRight>
                        <AccountMenu />
                    </HeaderRight>
                </Header>

                <div className="layout__content">{children}</div>
            </div>
        </div>
    );

export default Layout;
