<template>
  <main class="p-5">
    <input type="file" @change="displayImage($event)" id="image" />

    <div class="w-25 h-24 border-1 shadow mt-4">
      <img
        :src="show_content.image_source"
        alt=""
        id="imgsrc"
        class="w-100 h-25"
      />
      <audio :src="show_content.audio_source" id="audscr"></audio>
      <video :src="show_content.video_source" autoplay id="vidsrc"></video>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      show_content: {
        image_source: "",
        video_source: "",
        audio_source: "",
      },
    };
  },
  methods: {
    displayImage(event) {
      console.log(event.target.files[0]);
      let file = event.target.files[0];
      //   let file = document.getElementById("image").files[0];
      //   console.log(file.name);
      let reader = new FileReader();

      reader.onload = function () {
        document.getElementById("imgsrc").src = reader.result;
        document.getElementById("audsrc").src = reader.result;
        document.getElementById("vidsrc").src = reader.result;
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style>
</style>