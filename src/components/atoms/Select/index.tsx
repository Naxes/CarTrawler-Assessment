import { styled } from 'stitches.config';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState, createContext, useContext } from 'react';

type Props = {
  placeholder?: string,
  defaultValue?: string,
  children: React.ReactNode,
  onChange?: (option: string) => void,
};

const SelectContainer = styled('div', {
  alignItems: 'center',
  backgroundColor: '$loContrast',
  border: '1px solid $slate6',
  borderRadius: '$4',
  color: '$hiContrast',
  cursor: 'pointer',
  display: 'flex',
  position: 'relative',
  my: '$3',
  p: '$3',
  'svg': {
    position: 'absolute',
    right: '$3',
  },
});

const DropdownContainer = styled('ul', {
  backgroundColor: '$loContrast',
  border: '1px solid $slate6',
  borderBottomLeftRadius: '$4',
  borderBottomRightRadius: '$4',
  color: '$hiContrast',
  listStyle: 'none',
  mt: '-$4',
  overflow: 'hidden',
  p: '0',
});

export const SelectContext = createContext({
  selectedOption: '',
  changeSelectedOption: (option: string) => {},
});

export const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('Error creating context');
  }
  return context;
};

const Select = ({ children, defaultValue, placeholder, onChange, ...rest }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');

  const selectContainerRef = useRef(null);
  const selectPlaceholder = placeholder || "Choose an option";

  const clickOutsideHandler = () => setShowDropdown(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: string) => {
    if (onChange) {
      onChange(option);
    }

    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider value={{ selectedOption, changeSelectedOption: updateSelectedOption }}>
      <SelectContainer
        ref={selectContainerRef}
        css={{
          'svg': {
            transform: showDropdown
              ? 'rotate(180deg)'
              : 'none'
          },
          borderBottomLeftRadius: showDropdown ? '0' : '$4',
          borderBottomRightRadius: showDropdown ? '0' : '$4',
        }}
      >
        <div onClick={showDropdownHandler} style={{ width: '100%', height: '100%' }}>
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
          <FontAwesomeIcon icon={faChevronDown} width="15" />
        </div>
      </SelectContainer>
      <DropdownContainer
        css={{
          display: showDropdown
            ? 'block' : 'none'
        }}
      >
        {children}
      </DropdownContainer>
    </SelectContext.Provider>
  );
};

export default Select;
