/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { StyledProps } from './common/CommonProps';
import ErrorBoundary from './common/ErrorBoundary';
import { theme } from './common/Theme';
import CounterPanel from './CounterPanel';
import CounterPanelUsingRedux from './CounterPanelUsingRedux';

type Props = StyledProps;

/**
 * Template application.
 *
 * ErrorBoundary - Catches any exceptions thrown by child components, and shows the error message
 *     in the UI.
 * ThemeProvider - Styled components can access the theme through the 'theme' prop.
 */
const App: React.FunctionComponent<Props> = (props: Props) => {
    console.debug('App | Render');
    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>

                <div data-testid="App" className={props.className} >
                    <CounterPanel title="Don't click!"/>
                    <CounterPanelUsingRedux title="Click for Redux!"/>
                </div>

            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default styled(App)`
    box-sizing: border-box;
    padding: 5px 20px;
`;
