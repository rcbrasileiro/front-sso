<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          <h1>{{ $t('error.title') }}</h1>
          <h3>{{ $t('error.description') }}</h3>
          <div class="error-details">
            {{ $t('error.sugestion') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>
