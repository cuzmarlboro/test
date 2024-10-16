/*
 * @Author: 何泽颖 hezeying@autowise.ai
 * @Date: 2024-09-22 02:34:15
 * @LastEditors: 何泽颖 hezeying@autowise.ai
 * @LastEditTime: 2024-09-22 03:26:11
 * @FilePath: /mbti-match/src/model/index.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { atom } from 'jotai';
import storage from '@/utils/storage';

const { getStorageSync, setStorageSync } = storage;

// token
const tokenAtom = atom(getStorageSync('token') || '');

// token 持久化
const tokenStorageAtom = atom(
  get => get(tokenAtom),
  (get, set, value) => {
    set(tokenAtom, value);
    setStorageSync('token', value);
  }
);

export { tokenStorageAtom };
