import { ChangeEvent } from 'react';

export type THandleChangeValueSlider = (
  event: ChangeEvent<Record<string, unknown>>,
  value: number | number[],
) => void;

export type THandleChangeValueFeedback = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;
