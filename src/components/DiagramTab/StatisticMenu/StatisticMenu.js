import React, { useState } from 'react';
import { MenuItem, Select, FormControl } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';
// import styles from './StatisticMenu.module.css';

const useStyles = makeStyles({
  month: {
    paddingLeft: 21,
    paddingTop: 12,
    paddingBottom: 14,
    paddingRight: 20,
    width: 280,
    height: 50,
    background: 'trasparent',
    borderRadius: 30,
    fontFamily: 'Circe, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    color: '#000000',
    textTransform: 'none',
    border: '1px solid #000000',
  },
  menu_item: {
    width: 280,
  },
  icon_expend: {
    width: 40,
    height: 20,
    // right: 12,
    // position: 'absolute',
    userSelect: 'none',
    pointerEvents: 'none',
  },
});

const StatisticMenu = () => {
  const classes = useStyles();
  const monthNow = new Date().getMonth();
  const [month, setMonth] = useState(monthNow);
  const handleChange = event => {
    setMonth(event.target.value);
  };

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  // const menuProps = {
  //   anchorOrigin: {
  //     vertical: 'bottom',
  //     horizontal: 'left',
  //   },
  //   transformOrigin: {
  //     vertical: 'top',
  //     horizontal: 'left',
  //   },
  //   getContentAnchorEl: null,
  // };

  const iconComponent = props => {
    return (
      <ExpandMoreIcon className={props.className + ' ' + classes.icon_expend} />
    );
  };

  return (
    <FormControl>
      <Select
        IconComponent={iconComponent}
        disableUnderline
        // MenuProps={menuProps}
        value={month}
        displayEmpty
        onChange={handleChange}
        className={classes.month}
      >
        <MenuItem value="">Месяц</MenuItem>
        {months.map((month, index) => (
          <MenuItem value={index} key={month}>
            {month}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default StatisticMenu;
