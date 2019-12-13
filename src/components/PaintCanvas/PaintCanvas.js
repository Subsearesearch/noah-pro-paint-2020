import { createComponent, ref } from '@vue/composition-api'
import PaintSquare from '@/components/PaintSquare/PaintSquare.vue'

export default createComponent({
  setup() {
    const grid = ref([])
    for (let i = 0; i < 3; i++) {
      grid.value.push(
        Array.from(Array(9)).map(() => ({
          marker: ''
        }))
      )
    }
    const selectedColor = ref('red-500')
    const colorOptions = ref(['red-500', 'green-500', 'blue-500', 'yellow-500'])
    const vertical = ref(true)

    return {
      grid,
      selectedColor,
      colorOptions,
      vertical
    }
  },
  components: {
    PaintSquare
  }
})
