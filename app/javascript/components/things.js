import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import things, { loadThing } from '../redux/things/things';

const Thing = () => {
  const dispatch = useDispatch();
  const loadThingAction = bindActionCreators(loadThing, dispatch);
  const greeting = useSelector((state) => state.thing);

  useEffect(() => {
    loadThingAction();
    return () => null;
  }, []);

  return (
    <h2
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: 'lightgray',
        margin: 0,
      }}
    >
      {things.guid}
    </h2>
  );
};

export default Thing;