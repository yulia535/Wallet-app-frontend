import React, { useState } from 'react';
import { MenuItem, Select, FormControl } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';
import styles from './StatisticMenu.module.css';

const useStyles = makeStyles({
  form_control: {
    marginBottom: 20,
  },
  select_input: {
    paddingLeft: 21,
    textAlign: 'left',
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
    userSelect: 'none',
    pointerEvents: 'none',
  },
});

const StatisticMenu = () => {
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

  const years = [2019, 2020, 2021];

  const classes = useStyles();
  const monthNow = new Date().getMonth();
  const yearNow = new Date().getFullYear();
  const [month, setMonth] = useState(monthNow);
  const [year, setYear] = useState(yearNow);
  const handleChangeMonth = event => {
    setMonth(event.target.value);
  };
  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  const iconComponent = props => {
    return (
      <ExpandMoreIcon className={props.className + ' ' + classes.icon_expend} />
    );
  };

  return (
    <div className={styles.wrapper_select}>
      <FormControl className={styles.form_control}>
        <Select
          autoWidth
          IconComponent={iconComponent}
          disableUnderline
          value={month}
          displayEmpty
          onChange={handleChangeMonth}
          className={classes.select_input + ' ' + styles.select_input}
        >
          {months.map((month, index) => (
            <MenuItem value={index} key={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          IconComponent={iconComponent}
          disableUnderline
          value={year}
          displayEmpty
          onChange={handleChangeYear}
          className={classes.select_input + ' ' + styles.select_input}
        >
          {years.map(year => (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default StatisticMenu;
