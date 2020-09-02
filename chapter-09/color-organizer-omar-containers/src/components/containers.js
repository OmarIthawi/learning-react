import { PropTypes, Component } from 'react'
import AddColorForm from './AddColorForm'
import ColorList from './ColorList'
import '../../stylesheets/APP.scss'
import SortMenu from './SortMenu'
import { sortFunction } from '../lib/array-helpers'

import { addColor, sortColors, rateColor, removeColor } from '../actions'
import { connect } from 'react-redux'


export const NewColor = connect(
    () => ({}),
    dispatch => ({
        onNewColor(title, color) {
            dispatch(addColor(title, color))
        }
    })
)(AddColorForm)

export const Menu = connect(
    state => ({
        sort: state.sort
    }),
    dispatch => ({
        onSelect(sortBy) {
            dispatch(sortColors(sortBy))
        }
    })
)(SortMenu)

export const Colors = connect(
    state => ({
        colors: [...state.colors].sort(sortFunction(state.sort))
    }),
    dispatch => ({
        onRemove(id) {
            dispatch(removeColor(id))
        },
        onRate(id, rating) {
            dispatch(rateColor(id, rating))
        }
    })
)(ColorList)
