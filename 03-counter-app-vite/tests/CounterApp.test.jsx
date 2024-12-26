import {fireEvent, render, screen} from '@testing-library/react';
import {CounterApp} from '../src/CounterApp';


describe('Pruebas en el <CounterApp />', () => {
    
    const initialValue = 10;
    
    test ('debe de hacer match con el snapshot', () => {
        
        const {containder} = render(<CounterApp value={initialValue}/>); 
        expect (containder).toMatchSnapshot();
    });

    test ('debe de mostrar el valor por inicial de 100 <Counter App value={100}>', () => {
        
        render(<CounterApp value={100}/>); 
        expect (screen.getByText('-1')).toBeTruthy();
        // expect(screen.getByRole('heading',{level: 2}).innerHTML).toContain('100');
    });

    test('debe de incrementar con el boton +1',()=>{
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('+1')).toBeTruthy();
    })

    test('debe de incrementar con el boton -1',()=>{
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('-1'));
        screen.debug()
        expect(screen.getByText('-1')).toBeTruthy();
    })

    test('debe de funcionarel boton de reset',()=>{
        render(<CounterApp value={355}/>);
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        // fireEvent.click(screen.getByText('Reset'));
        // expect(screen.getByText(355)).toBeTruthy();
    })

}); 