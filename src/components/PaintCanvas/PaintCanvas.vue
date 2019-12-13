<template>
  <div>
    <div class="flex flex-${vertical ? 'col' : 'row'}">
      Color switch:
      <div
        @click="selectedColor = color"
        v-for="color in colorOptions"
        :key="color"
        :class="`bg-${color} h-6 w-6 m-1 ${selectedColor === color ? 'border-2 border-black' : ''}`"
      ></div>
      <button @click="vertical = !vertical">Toggle Vertical</button>
    </div>
    <div :class="`flex flex-${vertical ? 'row' : 'col'}`">
      <div
        :class="`flex flex-${vertical ? 'col' : 'row'}`"
        v-for="(row, index) in grid"
        :key="index"
      >
        <PaintSquare
          @click.native="box.marker = box.marker === selectedColor ? '' : selectedColor"
          v-for="(box, index) in row"
          :key="index"
          :marker="box.marker"
        >{{box}}</PaintSquare>
      </div>
    </div>
  </div>
</template>

<script src="./PaintCanvas.js"></script>