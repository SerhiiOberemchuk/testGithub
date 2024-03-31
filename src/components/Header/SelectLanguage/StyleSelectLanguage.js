const customStyleSelect = {
  control: (provided, state) => ({
    ...provided,

    backgroundColor: state.isFocused
      ? 'var(--primary-green-100)'
      : 'var(--secondary-brown-200)',
    boxShadow: state.isFocused
      ? '0 2px 6px 2px rgba(93, 70, 63, 0.15), 0 1px 2px 0 rgba(93, 70, 63, 0.3)'
      : 'none',
    '&:hover': {
      backgroundColor: 'var(--primary-green-100)',
      boxShadow:
        '0 2px 6px 2px rgba(93, 70, 63, 0.15), 0 1px 2px 0 rgba(93, 70, 63, 0.3)',
    },

    borderRadius: '50%',
    border: 'none',
    width: '56px',
    height: '56px',
    fontFamily: 'var(--second-family)',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '100%',
    textAlign: 'center',
    color: 'var(--secondary-brown-950)',
    borderright: 'none',
    cursor: 'pointer',
  }),
  dropdownIndicator: base => ({
    ...base,
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  valueContainer: provided => ({
    ...provided,
    justifyContent: 'center',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    width: '100%',
    justifyContent: 'center',
    borderRadius: '99px',
    marginTop: '8px',
    overflow: 'hidden',
    // marginTop: window.innerHeight < 700 ? '-180px' : '8px',
  }),

  menuList: provided => ({
    ...provided,
    display: 'flex',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'none',
    flexDirection: 'column',
    // flexDirection: 'column-reverse',
    gap: '8px',
    margin: '0',
    paddingTop: '0',
    paddingBottom: '0',
  }),
  option: (provided, state) => ({
    ...provided,

    display: 'flex',
    borderRadius: '99px',
    margin: '0px',
    width: '56px',
    height: '56px',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--second-family)',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '100%',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'var(--secondary-brown-950)',

    backgroundColor: state.isFocused
      ? 'var(--primary-green-100)'
      : 'var(--secondary-brown-200)',

    '&:hover': {
      backgroundColor: 'var(--primary-green-100)',
    },
  }),
};
export default customStyleSelect;
