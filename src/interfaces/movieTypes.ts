import { ChangeEvent } from 'react';

export type THandleChangeValueSlider = (
  event: ChangeEvent<Record<string, unknown>>,
  value: number | null,
) => void;

export type THandleChangeValueFeedback = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;
