<template>
  <div style="height:60px;width:60px;border: 1px solid black">
    <div
      style="height:50px;width:50px;margin:5px"
      :class="`border-${marker} ${marker ? 'border-2' : ''} rounded-full`"
    ></div>
  </div>
</template>

<script src="./PaintSquare.js"></script>