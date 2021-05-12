import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../Search';

describe('Search', () => {
    test('calls the onChange callback handler', () => {
        const onChange = jest.fn();

        render(
            <Search value="" onChange={onChange}>
                Search:
        </Search>
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'JavaScript' },
        });

        expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('calls the onChange callback handler userEvent', async () => {
        const onChange = jest.fn();
     
        render(
          <Search value="" onChange={onChange}>
            Search:
          </Search>
        );
     
        await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
     
        expect(onChange).toHaveBeenCalledTimes(10);
      });

});



